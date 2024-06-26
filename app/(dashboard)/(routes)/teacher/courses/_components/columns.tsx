"use client"

import { Course } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"

import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={()=> {column.toggleSorting(column.getIsSorted() === "asc")}}
            >
                Title
                <ArrowUpDown className="ml-2 h-4 w-4"/>
            </Button>
        )
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={()=> {column.toggleSorting(column.getIsSorted() === "asc")}}
            >
                Price (INR)
                <ArrowUpDown className="ml-2 h-4 w-4"/>
            </Button>
        )
    },
    cell: ({ row }) => {
        const price = parseFloat(row.getValue('price') || '0')
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'INR',
        }).format(price)
  
        return <div>{formatted}</div>
      },
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={()=> {column.toggleSorting(column.getIsSorted() === "asc")}}
            >
                Published
                <ArrowUpDown className="ml-2 h-4 w-4"/>
            </Button>
        )
    },
    cell: ({ row }) => {
        const isPublished = row.getValue("isPublished") || false ;
        return (
            <Badge className={cn('bg-slate-500', isPublished && 'bg-sky-700')}>
                {isPublished? "Published" : "Draft"}
            </Badge>
        )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
        const { id } = row.original ;

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="h-4 p-0 w-8" variant="ghost">
                        <span className="sr-only">Open Menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <Link href={`/teacher/courses/${id}`}>
                        <DropdownMenuItem>
                            <Pencil className="h-4 w-4 mr-2"/>
                            Edit
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
  }
]
