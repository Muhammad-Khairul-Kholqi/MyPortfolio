import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import { FaGithub } from "react-icons/fa";

const Contributions = () => {
    const [contributions, setContributions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const username = 'Muhammad-Khairul-Kholqi'; 

    useEffect(() => {
        const octokit = new Octokit({
            auth: import.meta.env.VITE_GITHUB_TOKEN
        });

        const fetchContributions = async () => {
            try {
                const { data } = await octokit.request(`GET /users/${username}/events/public`);
                const pushEvents = data.filter(event => event.type === 'PushEvent');
                setContributions(pushEvents);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
            }
        };

        fetchContributions();
    }, [username]);

    if (loading) {
        return <div class="text-center">
                  <div role="status">
                      <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-400 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                  </div>
              </div>
    }

    if (error) {
        return <div>Error fetching contributions: {error.message}</div>;
    }

    const totalContributions = contributions.length;
    const today = new Date();
    const thisWeek = contributions.filter(event => {
        const eventDate = new Date(event.created_at);
        return eventDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()) && eventDate <= today;
    }).length;
    const bestDay = contributions.reduce((max, event) => {
        const eventDate = new Date(event.created_at);
        const count = contributions.filter(e => new Date(e.created_at).toDateString() === eventDate.toDateString()).length;
        return count > max.count ? { count, date: eventDate } : max;
    }, { count: 0, date: null });
    const average = totalContributions / (Math.round((today - new Date(bestDay.date.getFullYear(), bestDay.date.getMonth(), bestDay.date.getDate())) / (1000 * 60 * 60 * 24)));

    return (
        <div>
            <div className="flex gap-[5px] flex-wrap items-center">
                <FaGithub className="text-[20px]" />
                <p className="text-[20px]">Contributions</p>
            </div>
            <div className="flex gap-[50px] flex-wrap items-center justify-start">
                <p className="text-[#525252]">My contributions from last year on github.</p>
                <a href="https://github.com/Muhammad-Khairul-Kholqi">
                    <p className="text-gray-600 italic hover:text-gray-800 pr-[120px] hover:underline">@Irull's</p>
                </a>
            </div>
            <div className="summary flex flex-wrap justify-start gap-[20px] mt-[10px]">
                <div className="bg-[#F5F5F5] p-[10px] w-[200px] text-start rounded-[10px] border">
                    <p className="text-[13px]">Total</p>
                    <p className="text-green-500 text-[25px]">{totalContributions}</p>
                </div>

                <div className="bg-[#F5F5F5] p-[10px] w-[200px] text-start rounded-[10px] border">
                    <p className="text-[13px]">This Week</p>
                    <p className="text-green-500 text-[25px]">{thisWeek}</p>
                </div>

                <div className="bg-[#F5F5F5] p-[10px] w-[200px] text-start rounded-[10px] border">
                    <p className="text-[13px]">Best Day</p>
                    <p className="text-green-500 text-[25px]">{bestDay.count}</p>
                </div>

                <div className="bg-[#F5F5F5] p-[10px] w-[200px] text-start rounded-[10px] border">
                    <p className="text-[13px]">Average</p>
                    <p className="text-green-500 text-[25px]">{isNaN(average) ? 'N/A' : average.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Contributions;
