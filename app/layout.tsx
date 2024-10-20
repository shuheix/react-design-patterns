export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
      className="container lg"
      >
        {children}
      </body>
    </html>
  );
}
