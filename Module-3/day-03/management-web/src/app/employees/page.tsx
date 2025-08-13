"use client";

import React from "react";
import { useEmployee } from "@/helpers/useEmployee";

export default function Employees() {
  const { loading, employee } = useEmployee();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center w-screen h-screen p-6">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white font-bold p-6">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white font-bold">Employees</h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-blue border border-gray-100">
          <thead className="bg-blue-700 border-b border-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-bold text-white">ID</th>
              <th className="py-3 px-4 text-left text-sm font-bold text-white">Name</th>
              <th className="py-3 px-4 text-left text-sm font-bold text-white">Role</th>
              <th className="py-3 px-4 text-left text-sm font-bold text-white">Department</th>
              <th className="py-3 px-4 text-left text-sm font-bold text-white">Created At</th>
            </tr>
          </thead>
          <tbody>
            {
            employee?.data?.length! > 0 ? (
              employee?.data?.map((emp) => (
                <tr key={emp.id_employee}>
                  <td className="py-3 px-4 text-sm text-white border border-color-white">{emp.id_employee}</td>
                  <td className="py-3 px-4 text-sm text-white border border-color-white">{emp.name}</td>
                  <td className="py-3 px-4 text-sm text-white border border-color-white">{emp.role}</td>
                  <td className="py-3 px-4 text-sm text-white border border-color-white">{emp.department}</td>
                  <td className="py-3 px-4 text-sm text-white border border-color-white">{emp.created_at}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center text-white">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
