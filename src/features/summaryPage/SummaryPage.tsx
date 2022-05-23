const SummaryPage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <main
        className="
      p-6  sm:h-fit sm:w-full sm:flex-row sm:justify-between md:flex-row md:p-12"
      >
        <section className="order-field border-1 mb-10 max-w-[441px] rounded border border-black">
          <h1 className="p-4 text-2xl font-semibold">Twoje zamówienie</h1>
          <p className="py-2 px-4">pierwszy produkt</p>
          <p className="py-2 px-4">drugi produkt</p>
          <p className="py-2 px-4">trzeci produkt</p>
        </section>
        <section className="address-field border-1 h-6 max-w-[441px] rounded border border-black"></section>
      </main>
    </div>
  );
};

export default SummaryPage;
