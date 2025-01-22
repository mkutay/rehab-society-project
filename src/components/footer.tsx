export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="items-center lg:items-center px-4 md:my-12 my-6 flex lg:flex-row flex-col max-w-prose lg:max-w-6xl mx-auto gap-8">
        <div className="grow flex flex-col justify-between gap-8">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <p className="text-lg">
              Made with <b className="text-red-500">&lt;3</b>
            </p>
            <p>
              Thanks for reading.
            </p>
          </div>
          <p className="text-sm text-muted-foreground lg:flex hidden">
            {`© 2025 Rehab Society. All Rights Reserved.`}
          </p>
        </div>
        <p className="text-sm text-muted-foreground lg:hidden flex text-center justify-center">
          {`© 2025 Rehab Society. All Rights Reserved.`}
        </p>
      </div>
    </footer>
  );
}