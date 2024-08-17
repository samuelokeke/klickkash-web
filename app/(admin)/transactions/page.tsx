import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { ListFilterIcon, SearchIcon } from "lucide-react";
import { FormInput } from "@/components/ui/form-input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const transactions = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div>
      <section className="flex justify-end mb-6">
        <div className="w-full md:w-fit flex items-start gap-3">
          <FormInput className="min-w-96 flex-row-reverse pl-3" placeholder="Search" icon={<SearchIcon />} />

          <Select>
            <SelectTrigger className="w-[140px]" icon={<ListFilterIcon />}>
              <SelectValue placeholder="7 Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel></SelectLabel>
                <SelectItem value="7">7 Days</SelectItem>
                <SelectItem value="14">14 Days</SelectItem>
                <SelectItem value="30">30 Days</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      <div className="bg-white overflow-y-auto py-8">
        <div className="px-6 mb-6">
          <h1 className="text-xl">Recent Transactions</h1>
        </div>

        <Table>
          <TableCaption>A list of your recent transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] px-6">Invoice</TableHead>
              <TableHead className="px-6">Status</TableHead>
              <TableHead className="px-6">Method</TableHead>
              <TableHead className="px-6 text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="px-6 font-medium">{invoice.invoice}</TableCell>
                <TableCell className="px-6">{invoice.paymentStatus}</TableCell>
                <TableCell className="px-6">{invoice.paymentMethod}</TableCell>
                <TableCell className="px-6 text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className="px-6" colSpan={3}>
                Total
              </TableCell>
              <TableCell className="px-6 text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <div className="p-6">
          <Pagination className="justify-start mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious className="border" href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext className="border" href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Page;
