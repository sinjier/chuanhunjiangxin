// /api/proxy.js
export default async (req, res) => {
    const apiUrl = 'https://geo.datav.aliyun.com/areas_v3/bound/510000_full.json';
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
};