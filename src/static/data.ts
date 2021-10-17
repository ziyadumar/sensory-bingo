import shuffle from "shuffle-array";


const strings = [
    "Great success",
    "User engagement",
    "Kodiak",
    "Huge kudos to X",
    "Suboptimal",
    "Learning experience ",
    "Personalized learning",
    "Super excited ",
    "Funnel",
    "OKRs",
    "Highest company priority ",
    "It’s only a test",
    "Operate like a startup",
    "Keeping the momentum",
    "The results look promising",
    "Initial signals",
    "Can’t wait to share results ",
    "Significant increase ",
    "High quality content",
    "Keep product consistent ",
    "Data driven ",
    "Glorious X team",
    "Allocate resources ",
    "Alignment between X and Y",
    "Happy to announce"
];

export const data: IData = shuffle(strings).reduce(
    (data, value, index) => ({ ...data, [index]: value }),
    {}
);

export interface IData {
    [id: string]: string
}