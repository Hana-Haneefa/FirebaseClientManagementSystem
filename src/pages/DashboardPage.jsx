export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-xl font-semibold text-zinc-50">
              Client Manager
            </h1>

            <p className="mt-1 text-sm text-zinc-400">
              Manage your clients in one place
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400"
          >
            + Add client
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6">

        {/* Dashboard Statistics */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">
              Total clients
            </p>

            <p className="mt-2 text-3xl font-semibold text-zinc-50">
              24
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">
              Active
            </p>

            <p className="mt-2 text-3xl font-semibold text-emerald-400">
              15
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">
              Leads
            </p>

            <p className="mt-2 text-3xl font-semibold text-amber-400">
              6
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">
              Inactive
            </p>

            <p className="mt-2 text-3xl font-semibold text-zinc-400">
              3
            </p>
          </div>

        </section>

        {/* Client Directory */}
        <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">

          {/* Table Header */}
          <div className="border-b border-zinc-800 px-5 py-4">
            <h2 className="text-lg font-semibold text-zinc-50">
              Client Directory
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              View and manage your business contacts
            </p>
          </div>

          {/* Client Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">

              <thead className="border-b border-zinc-800 bg-zinc-900 text-xs uppercase tracking-wide text-zinc-400">
                <tr>
                  <th className="px-5 py-3 font-medium">
                    Client
                  </th>

                  <th className="hidden px-5 py-3 font-medium md:table-cell">
                    Company
                  </th>

                  <th className="hidden px-5 py-3 font-medium lg:table-cell">
                    Phone
                  </th>

                  <th className="px-5 py-3 font-medium">
                    Status
                  </th>

                  <th className="px-5 py-3 text-right font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-800">

                {/* Client 1 */}
                <tr className="transition hover:bg-zinc-800/50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-semibold text-indigo-300">
                        N
                      </div>

                      <div>
                        <p className="font-medium text-zinc-100">
                          Nimali Perera
                        </p>

                        <p className="text-zinc-400">
                          nimali@example.com
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 md:table-cell">
                    Lanka Tech
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 lg:table-cell">
                    +94 77 123 4567
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                      Active
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="rounded-md border border-red-500/30 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Client 2 */}
                <tr className="transition hover:bg-zinc-800/50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-sm font-semibold text-amber-300">
                        K
                      </div>

                      <div>
                        <p className="font-medium text-zinc-100">
                          Kasun Fernando
                        </p>

                        <p className="text-zinc-400">
                          kasun@example.com
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 md:table-cell">
                    Island Foods
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 lg:table-cell">
                    +94 71 234 5678
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-500/20">
                      Lead
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="rounded-md border border-red-500/30 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Client 3 */}
                <tr className="transition hover:bg-zinc-800/50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-sm font-semibold text-purple-300">
                        D
                      </div>

                      <div>
                        <p className="font-medium text-zinc-100">
                          Dilani Silva
                        </p>

                        <p className="text-zinc-400">
                          dilani@example.com
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 md:table-cell">
                    Ceylon Wear
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 lg:table-cell">
                    +94 76 345 6789
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                      Active
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="rounded-md border border-red-500/30 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Client 4 */}
                <tr className="transition hover:bg-zinc-800/50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-sm font-semibold text-pink-300">
                        R
                      </div>

                      <div>
                        <p className="font-medium text-zinc-100">
                          Ruwan Jayasinghe
                        </p>

                        <p className="text-zinc-400">
                          ruwan@example.com
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 md:table-cell">
                    Tea Leaf Exports
                  </td>

                  <td className="hidden px-5 py-4 text-zinc-300 lg:table-cell">
                    +94 70 456 7890
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-zinc-500/10 px-2.5 py-1 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-zinc-500/20">
                      Inactive
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="rounded-md border border-red-500/30 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}