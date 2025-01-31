

export const TableSkeleton = () => {
    return (
      <table className="w-full text-sm text-left text-gray-500">
        <thead>
          <tr>
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Nama Buah</th>
            <th className="py-3 px-6">Harga</th>
            <th className="py-3 px-6">Tanggal</th>
            <th className="py-3 px-6 justify-center">Action</th>
          </tr>
        </thead>
        <tbody className="animate-pulse">
          <tr className="big-white border-b border-gray-50">
            <td className="py-3 px-6">
              <div className="h-4 w-4 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-20 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="flex justify-center gap-1 py-3">
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
          </tr>

          <tr className="big-white border-b border-gray-50">
            <td className="py-3 px-6">
              <div className="h-4 w-4 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-20 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="flex justify-center gap-1 py-3">
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
          </tr>

          <tr className="big-white border-b border-gray-50">
            <td className="py-3 px-6">
              <div className="h-4 w-4 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-20 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="flex justify-center gap-1 py-3">
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
          </tr>

          <tr className="big-white border-b border-gray-50">
            <td className="py-3 px-6">
              <div className="h-4 w-4 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-20 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="flex justify-center gap-1 py-3">
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
          </tr>

          <tr className="big-white border-b border-gray-50">
            <td className="py-3 px-6">
              <div className="h-4 w-4 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-20 rounded bg-gray-100"></div>
            </td>

            <td className="py-3 px-6">
              <div className="h-4 w-32 rounded bg-gray-100"></div>
            </td>

            <td className="flex justify-center gap-1 py-3">
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
              <div className="h-7 w-7 rounded-sm bg-gray-100"></div>
            </td>
          </tr>
        </tbody>
      </table>
    );
}