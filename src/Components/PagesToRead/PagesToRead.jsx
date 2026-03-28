import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const PagesToRead = () => {

    const [shape, setShape] = useState([])

    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => setShape(data))
    }, [])

    return (
        <div className='bg-gray-200'>
            <BarChart
                style={{ width: '1000px', height: "500px", aspectRatio: 1.618 }}
                responsive
                data={shape}
                className='pt-10 ps-2 md:ps-10'
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" interval={0} angle={-25} textAnchor='end' height={140} />
                <YAxis />
                <Tooltip cursor={{ fillOpacity: 0.5 }} />
                <Bar dataKey="totalPages" fill="#8884d8" shape={TriangleBar} activeBar>
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;