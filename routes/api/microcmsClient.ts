import { createClient } from "microcmsSdk";
import "dotenv/load.ts";

interface Article {
  contents: [
     id: string,
           createdAt: string,
            updatedAt: string,
            publishedAt: string,
            revisedAt: string,
            title: string,
            caption: string,
            skill: string,
            url:string,
            cover: {
                url: string,
                height: string,
                width: string
            },
            spImage_1: {
                url: string,
                height: string,
                width: string
    },
            spImage_2: {
                url: string,
                height: string,
                width: string
    },
            spImage_3: {
                url: string,
                height: string,
                width: string
            },
            pcImage: {
                url: string,
                height: string,
                width: string
            },
            bannerImage: {
                url: string,
                height: string,
                width: string
            }
  ],
  career: string,
  about:string
}

export const findAllArticles = async () => {
  const client = createClient({
      serviceDomain: "katatsumori",
      apiKey: `${Deno.env.get("X_API_KEY")}`,
});
    
const res = await client.get({
      endpoint: "portfolio",
    });
    const articles: Article[] = [res['contents']];
    return articles;
}

export const findArticleById = async (id: string) => {
  const client = createClient({
      serviceDomain: "katatsumori",
      apiKey: `${Deno.env.get("X_API_KEY")}`,
});
    
const res = await client.get({
  endpoint: "portfolio",
  contentId:id
});
  
  return res;
}

export const findProfile = async () => {
  const client = createClient({
      serviceDomain: "katatsumori",
      apiKey: `${Deno.env.get("X_API_KEY")}`,
});
    
const res = await client.get({
      endpoint: "profile",
});
  const profiles: Article[] = [res];
    return profiles;
}