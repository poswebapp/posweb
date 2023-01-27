import React, { useEffect } from "react";
import { expenseStore } from "../../zustand/expense";
import { invoiceStore } from "../../zustand/invoice";
import { totalStore } from "../../zustand/total";

const TopContent = () => {
  const getMonthlyExpense = expenseStore((state) => state.getMonthlyTotal);
  const getMonthlyIncome = invoiceStore((state) => state.getMonthlyTotal);
  const getQuarterlyExpense = expenseStore((state) => state.getQuarterlyTotal);
  const getQuarterlyIncome = invoiceStore((state) => state.getQuarterlyTotal);
  const getYearlyExpense = expenseStore((state) => state.getYearlyTotal);
  const getYearlyIncome = invoiceStore((state) => state.getYearlyTotal);

  const total = totalStore((state) => state.total);
  const getTotal = totalStore((state) => state.getTotal);

  const dailyExpense = expenseStore((state) => state.total);
  const dailyIncome = invoiceStore((state) => state.total);
  const dailySale = dailyIncome - dailyExpense;

  const monthlyExpense = expenseStore((state) => state.monthly);
  const monthlyIncome = invoiceStore((state) => state.monthly);
  const monthlySale = monthlyIncome - monthlyExpense;
  
  const quarterlyExpense = expenseStore((state) => state.quarterly);
  const quarterlyIncome = invoiceStore((state) => state.quarterly);
  const quarterlySale = quarterlyIncome - quarterlyExpense;
  
  
  const yearlyExpense = expenseStore((state) => state.yearly);
  const yearlyIncome = invoiceStore((state) => state.yearly);
  const yearlySale = yearlyIncome - yearlyExpense;
  
  

  useEffect(() => {
    getTotal();
    getMonthlyExpense();
    getMonthlyIncome();
    getQuarterlyExpense()
    getQuarterlyIncome()
    getYearlyExpense();
    getYearlyIncome()
  }, [getTotal, getMonthlyExpense, getMonthlyIncome, getQuarterlyIncome, getQuarterlyExpense, getYearlyExpense, getYearlyIncome]);

  return (
    <span className="flex flex-wrap flex-1 flex-row md:justify-start content-start grid-cols-4 gap-5 w-full h-auto">
      <Content
        name={"Total Goods"}
        value={total.good}
        border={"border-cyan-600"}
      />
      <Content
        name={"Total Incoming"}
        value={total.incoming}
        border={"border-violet-700"}
      />
      <Content
        name={"Stocks of Goods"}
        value={total.stock}
        border={"border-violet-400"}
      />

      <Content
        name={"Daily Income"}
        value={dailyIncome}
        border={"border-amber-800"}
      />
      <Content
        name={"Daily Sale"}
        value={dailySale}
        border={"border-amber-800"}
      />
    
      <Content
        name={"Monthly Income"}
        value={monthlyIncome}
        border={"border-amber-600"}
      />
      <Content
        name={"Monthly Sale"}
        value={monthlySale}
        border={"border-amber-600"}
      />
    
      <Content
        name={"Quarterly Income"}
        value={quarterlyIncome}
        border={"border-amber-400"}
      />
      <Content
        name={"Quarterly Sale"}
        value={quarterlySale}
        border={"border-amber-400"}
      />
    
      <Content
        name={"Annual Income"}
        value={yearlyIncome}
        border={"border-amber-400"}
      />
      <Content
        name={"Annoul Sale"}
        value={yearlySale}
        border={"border-amber-400"}
      />
    </span>
  );
};

export default TopContent;

export const Content = ({ name, value, border }) => {
  return (
    <span
      className={`flex justify-start content-between border-l-8 bg-white md:bg-zinc-100 h-20 w-40 shad rounded-lg p-4 text-md font-bold text-zinc-600 ${border}`}
    >
      <span className="grid gap-2">
        <h4 className="text-zinc-500 font-[500] rale text-xs w-full whitespace-wrap">
          {name}
        </h4>
        <p>{value}</p>
      </span>
    </span>
  );
};
