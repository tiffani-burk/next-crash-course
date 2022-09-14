import { articles } from '../../../data'

export default function handler(req, res) {
    res.status(200).json(articles)
}

//Notes
//this is serving the articles from the API