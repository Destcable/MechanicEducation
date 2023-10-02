export type TraningData = {
    type?: "checkbox" | "select" | null | undefined
    title: string,
    image?: string | null | undefined,
    component: string,
    answers?: [string | number] 
}