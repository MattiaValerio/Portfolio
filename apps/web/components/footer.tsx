export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mattia Valerio. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
