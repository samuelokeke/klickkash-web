import React, { createContext, useContext } from "react";

type Post = { id: number };

const CardContext = createContext<Post | null>(null);

const useCardContext = () => {
  const context = useContext(CardContext);

  if (context) {
    return context;
  } else {
    return new Error("Context is not available");
  }
};

type IPost = { post: Post; children?: React.ReactNode };

const Compound = ({ post, children }: IPost) => {
  return (
    <CardContext.Provider value={post}>
      <div className="bg-gray-100 rounded-sm ring-2 ring-slate-300 p-6 mb-4">{children}</div>
    </CardContext.Provider>
  );
};

Compound.displayName = "Composite Compound";

const Title = () => <h2>Component Header</h2>;

Title.displayName = "Compound Title";

const Content = () => <p className="my-4">Component Content</p>;

Content.displayName = "Compound Content";

const Footer = () => {
  return (
    <div className="flex gap-4">
      <button className="px-3 py-1 rounded-sm bg-gray-100 border">Cancel</button>
      <button className="px-3 py-1 rounded-sm bg-gray-100 border">Save</button>
    </div>
  );
};

Footer.displayName = "Compound Footer";

Compound.Title = Title;
Compound.Content = Content;
Compound.Footer = Footer;

export default Compound;
