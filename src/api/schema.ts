export const schema = {
        properties: {
                activity: { type: "string" },
                accessibility: { type: "number" },
                type: { type: "string" },
                participants: { type: "number"},
                price: { type: "number" },
                link: { type: "string" },
                key: { type: "string" },
        },
        required: ['activity', 'accessibility', 'type', 'participants', 'price']
};