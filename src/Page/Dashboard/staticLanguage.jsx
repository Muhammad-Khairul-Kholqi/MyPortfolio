import React, { useState, useEffect } from 'react';
import { LuGithub } from "react-icons/lu";

const StaticLanguage = () => {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const fetchPopularLanguages = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Muhammad-Khairul-Kholqi/repos');
        const repos = await response.json();
        const langMap = new Map();
        repos.forEach(repo => {
          if (repo.language) {
            if (langMap.has(repo.language)) {
              langMap.set(repo.language, langMap.get(repo.language) + 1);
            } else {
              langMap.set(repo.language, 1);
            }
          }
        });
        const totalRepos = repos.length;
        const popularLanguages = Array.from(langMap.entries()).map(([lang, count]) => ({
          language: lang,
          percentage: Math.round((count / totalRepos) * 100)
        }));
        setLanguages(popularLanguages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPopularLanguages();
  }, []);

  return (
    <div>
          <div className="p-[20px] max-w-[858px] border rounded-[15px]">
              <div className="w-full">
                  {languages.map((language, index) => (
                  <div key={index} className="flex items-center mb-2 gap-[20px]">
                      <div className="w-[100px] text-left">{language.language}</div>
                      <div className="w-3/4 bg-gray-200 rounded-[50px]">
                      <div className="bg-green-500 text-xs rounded-[50px] px-[10px] leading-none py-[5px] text-center text-black" style={{ width: `${language.percentage}%` }}></div>
                      </div>
                      <div>
                          {language.percentage}%
                      </div>
                  </div>
                  ))}
              </div>
          </div>
    </div>
  );
};

export default StaticLanguage;
