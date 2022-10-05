import {setupServer} from "msw/node"
import {rest} from "msw"

const server = setupServer(
    rest.get("http://codebangkok.com:5000/africa/animals", (request, response, context) => {

        const queryParam = request.url.searchParams.get("search");
        if (queryParam && queryParam === "zebra") {
            return response(
                context.json([{
                    id: "zebra",
                    name: "Zebra",
                    headline: "This is zebra",
                    image: "zebra",
                    gallery: ["zebra-1", "zebra-2"],
                }])
            )
        }

        return response(
            context.json([
                {
                    id: "lion",
                    name: "Lion",
                    headline: "This is lion",
                    image: "lion",
                    gallery: ["lion-1", "lion-2"],
                },
                {
                    id: "zebra",
                    name: "Zebra",
                    headline: "This is zebra",
                    image: "zebra",
                    gallery: ["zebra-1", "zebra-2"],
                }
            ])
        );
    })
)

export default server
