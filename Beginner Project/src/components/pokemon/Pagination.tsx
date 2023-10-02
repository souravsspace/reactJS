import { Button } from "../ui/button"

type PaginationProps = {
  goToPrevPage: (() => void) | null
  goToNextPage: (() => void) | null
}

export default function Pagination({
  goToPrevPage,
  goToNextPage,
}: PaginationProps) {
  return (
    <div className="flex gap-1 justify-end">
      {goToPrevPage && <Button onClick={goToPrevPage}>Previous</Button>}
      {goToNextPage && <Button onClick={goToNextPage}>Next</Button>}
    </div>
  )
}
