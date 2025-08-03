import { createContext, useState } from "react";
import getResponse from "../components/dashboard/getResponse";
import toast from "react-hot-toast";
import { useLocalStorage } from "react-use";
import dayjs from "dayjs";

export const contentContext = createContext(null);

function ContentContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState(null);
    const [strVal, setStrVal] = useLocalStorage("content", []);
    async function createRequest(data) {
        if (loading) return;
        try {
            const result = await getResponse(data.title, data.desc, setLoading);
            setContent(result);
            // localStorage.setItem("content", JSON.stringify(
            //     [{
            //         id: 10,
            //         createdAt: Date.now(),
            //         content: result
            //     }]
            // ));
            setStrVal([{
                id: Date.now(),
                createdAt: Date.now(),
                content: result,
                title: data.title,
                description: data.desc
            }, ...strVal]);
        } catch (err) {
            toast.error("Maqola yaratishda xatolik yuz berdi. Qayta urining.");
        } finally {
            setLoading(false);
        }
    }
    let contentMap = new Map();
    strVal.forEach((val) => {
        let date = dayjs(val.createdAt).format("YYYY-MM-DD");
        if (contentMap.has(date)) {
            contentMap.set(date, [...contentMap.get(date), { id: val.id, title: val.title, url: `content/${val.id}` }]);
        } else {
            contentMap.set(date, [{ id: val.id, title: val.title, url: `content/${val.id}` }]);
        }
    });
    let contentArr = Array.from(contentMap.entries());
    const promptHistory = contentArr.map((element) => {
        return {
            date: element[0],
            urls: element[1]
        }
    });
    promptHistory.sort((a,b) => dayjs(b.date).diff(dayjs(a.date)));
    return <contentContext.Provider value={{ loading, setLoading, content, createRequest, promptHistory }}>
        {children}
    </contentContext.Provider>
}

export default ContentContextProvider;