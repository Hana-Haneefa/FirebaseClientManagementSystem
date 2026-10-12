import { useEffect, useState } from "react"; //useState for keep client data inside the component : useEffect use for start the db listener when component is loading

import { collection, onSnapshot } from "firebase/firestore"; //collection is for reference 'clients' collection in firestore : onSnapshot for listent to db changes

import { db } from "../firebase";

export default function Dashboard() {
  const [clients, setClients] = useState([]);

  const [loadingClients, setLoadingClients] = useState(true);
  const [error, setError] = useState("");

  //READ data from firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "clients"),

      (snapshot) => {
        const clientList = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setClients(clientList);
        setLoadingClients(false);
      },

      (err) => {
        setError(err.message);
        setLoadingClients(false);
      },
    );

    return unsubscribe;
  }, []);

  //to replace hardcoded card numbers
  const stats = {
    total: clients.length,

    active: clients.filter((client) => client.status === "Active").length,

    leads: clients.filter((client) => client.status === "Lead").length,

    inactive: clients.filter((client) => client.status === "inactive").length,
  };

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
            <p className="text-sm text-zinc-400">Total clients</p>

            <p className="mt-2 text-3xl font-semibold text-zinc-50">
              {stats.total}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Active</p>

            <p className="mt-2 text-3xl font-semibold text-emerald-400">
              {stats.active}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Leads</p>

            <p className="mt-2 text-3xl font-semibold text-amber-400">
              {stats.leads}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Inactive</p>

            <p className="mt-2 text-3xl font-semibold text-zinc-400">
              {stats.inactive}
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
                  <th className="px-5 py-3 font-medium">Client</th>

                  <th className="hidden px-5 py-3 font-medium md:table-cell">
                    Company
                  </th>

                  <th className="hidden px-5 py-3 font-medium lg:table-cell">
                    Phone
                  </th>

                  <th className="px-5 py-3 font-medium">Status</th>

                  <th className="px-5 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-800">
                {loadingClients ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-zinc-400"
                    >
                      Loading clients...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-red-400"
                    >
                      Failed to load clients : {error}
                    </td>
                  </tr>
                ) : clients.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-zinc-500"
                    >
                      No clients yet.
                    </td>
                  </tr>
                ) : (
                  clients.map((client) => (
                    <tr
                      key={client.id}
                      className="transition hover:bg-zinc-800/50"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-semibold text-indigo-300">
                            {(client.name || "?").charAt(0).toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-medium text-zinc-100">
                              {client.name || "-"}
                            </p>

                            <p className="truncate text-zinc-400">
                              {client.email || "-"}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="hidden px-5 py-4 text-zinc-300 md:table-cell">
                        {client.company || "-"}
                      </td>

                      <td className="hidden px-5 py-4 text-zinc-300 md:table-cell">
                        {client.phone || "-"}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
                            statusStyles[client.status] || statusStyles.Lead
                          }`}
                        >
                          {client.status || "Lead"}
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
