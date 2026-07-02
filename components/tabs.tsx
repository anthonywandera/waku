"use client";

import { createContext, SetStateAction, useContext, useState } from "react";

const tabsContext = createContext<{
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
}>({ activeTab: "", setActiveTab() {} });

interface TabsComponentPros {
  children: React.ReactNode;
  initial: string;
}

export function Tabs({ children, initial }: TabsComponentPros) {
  const [activeTab, setActiveTab] = useState(initial);
  return (
    <tabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </tabsContext.Provider>
  );
}

export function TabsMenu({ children, ...props }: React.ComponentProps<"menu">) {
  return <menu {...props}>{children}</menu>;
}

interface TabContentProps extends React.ComponentProps<"div"> {
  id: string;
}
export function TabContent({ id, children, ...props }: TabContentProps) {
  const ctx = useContext(tabsContext);
  return ctx.activeTab === id && <div {...props}>{children}</div>;
}

interface TabTriggerProps extends React.ComponentProps<"button"> {
  id: string;
  activeClass?: string;
}
export function TabTrigger({
  children,
  id,
  activeClass = "bg-elevated",
  className,
  ...props
}: TabTriggerProps) {
  const ctx = useContext(tabsContext);

  function handleClick() {
    ctx.setActiveTab(id);
  }

  const isActive = ctx.activeTab === id;

  return (
    <button
      onClick={handleClick}
      className={`${isActive && activeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
