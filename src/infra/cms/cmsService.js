const TOKEN = process.env.DATO_TOKEN

const globalQuery = `
query{
	globalFooter{
description
  }
}
`
const BASE_ENDPOINT = 'https://graphql.datocms.com/'
const PREVIEW_ENDPOINT = 'https://graphql.datocms.com/preview'

export async function cmsService({
  query,
  preview
}) {
  const ENDPOINT = preview ? PREVIEW_ENDPOINT : BASE_ENDPOINT
  try {
    const pageContentResponse = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query,
      })
    })
      .then(async(respostaDoServer) => {
        const body = await respostaDoServer.json()
        console.log('body', body)
        if(!body.errors) return body
        
        throw new Error(JSON.stringify(body))
      })
    
      const GlobalContentResponse = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query: globalQuery,
      })
    })
      .then(async(respostaDoServer) => {
        const body = await respostaDoServer.json()
        console.log('body', body)
        if(!body.errors) return body
        
        throw new Error(JSON.stringify(body))
      })
    
    // console.log('pageContentResponse', pageContentResponse)

  return {
    data: {
      ...pageContentResponse.data,
      globalContent: {
        ...GlobalContentResponse.data,
      }
    },
   
  }
  }
  catch (err) {
    throw new Error(err.message)
  }
 
}




