export interface NewLinkInterface {
    statusCode: number,
    message: string,
    data: {
        visits: number,
        slug: string,
        url: string,
        _id: string,
        createdAt: string,
        updatedAt: string
    }
}
