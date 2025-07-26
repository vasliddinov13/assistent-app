import OpenAI from "openai";

async function getResponse(title, description,setLoading) {
    const client = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_KEY, // This is the default and can be omitted
        dangerouslyAllowBrowser: true
    });
    setLoading(true);
    const response = await client.responses.create({
        model: 'gpt-4o',
        instructions: 'Your are the helpful assistant designed to assist users in creating engaging content, such as blogs, articles, or any written material.',
        input: `
            Please create an article based on the information. Here is the list of information:
            title: ${title}
            description: ${description}
            Remember the post should be based on the information that I have mentioned above. Output should be plain text format strictly.
        `,
    });

    return response.output_text;
}

export default getResponse;