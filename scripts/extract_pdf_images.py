from __future__ import annotations

import argparse
from pathlib import Path

from pypdf import PdfReader


def parse_pages(value: str, page_count: int) -> list[int]:
    pages: set[int] = set()
    for part in value.split(","):
        part = part.strip()
        if "-" in part:
            start, end = (int(number) for number in part.split("-", 1))
            pages.update(range(start, end + 1))
        elif part:
            pages.add(int(part))
    return [page - 1 for page in sorted(pages) if 1 <= page <= page_count]


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--pages", required=True, help="One-based pages, for example 4-7,10")
    args = parser.parse_args()

    reader = PdfReader(args.pdf)
    args.output.mkdir(parents=True, exist_ok=True)

    for page_index in parse_pages(args.pages, len(reader.pages)):
        for image_index, image in enumerate(reader.pages[page_index].images):
            suffix = Path(image.name).suffix or ".png"
            destination = args.output / f"p{page_index + 1}-img{image_index}{suffix}"
            destination.write_bytes(image.data)
            print(destination)


if __name__ == "__main__":
    main()
