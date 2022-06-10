import { FC, createContext, useState } from "react";

interface IPostType {
  userId: number;
  id: number;
  title: string;
  body: string;
  posts: IPostType[];
}
const initialState: IPostType = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
  posts: [],
};

export const DataContext = createContext([{}, () => {}]);

interface DataProps {
  children: React.ReactNode;
}

const DataContextProvider: FC<DataProps> = ({ children }) => {
  const [dataGlobal, setDataGlobal] = useState<IPostType>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
    posts: [initialState],
  });

  return (
    <DataContext.Provider value={[dataGlobal, setDataGlobal]}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
