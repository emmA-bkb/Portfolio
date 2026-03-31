'use client';

import { useEffect, useState } from 'react';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  language?: string | null;
  name: string;
}

export default function GitHubProfile() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [languages, setLanguages] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userRes = await fetch('https://api.github.com/users/emmA-bkb');
        if (!userRes.ok) throw new Error('Failed to fetch user');
        const userData = await userRes.json();
        setUser(userData);

        // Fetch repos to get languages
        const reposRes = await fetch('https://api.github.com/users/emmA-bkb/repos?per_page=100');
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const repos = await reposRes.json();

        // Count languages
        const langCount: { [key: string]: number } = {};
        if (Array.isArray(repos)) {
          repos.forEach((repo: GitHubRepo) => {
            if (repo.language) {
              langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            }
          });
        }
        setLanguages(langCount);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-sm">
        <div className="bg-gray-800 rounded-lg p-6 animate-pulse">
          <div className="h-24 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <div className="text-white">Error loading profile</div>;
  }

  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="w-full max-w-sm space-y-4">
      {/* Profile Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.avatar_url}
            alt={user.name}
            className="w-20 h-20 rounded-full border-2 border-blue-500"
          />
          <div>
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <p className="text-gray-400">@{user.login}</p>
          </div>
        </div>
        {user.bio && <p className="text-gray-300 mb-4 text-sm">{user.bio}</p>}
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.public_repos}</div>
            <div className="text-gray-400 text-xs">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.followers}</div>
            <div className="text-gray-400 text-xs">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user.following}</div>
            <div className="text-gray-400 text-xs">Following</div>
          </div>
        </div>
      </div>

    

      {/* Languages Card */}
      {topLanguages.length > 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-white font-bold mb-4">Top Languages</h3>
          <div className="space-y-3">
            {topLanguages.map(([lang, count]) => (
              <div key={lang}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-300">{lang}</span>
                  <span className="text-sm text-gray-400">{count} repos</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${(count / Math.max(...Object.values(languages), 1)) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Button */}
      <a
        href="https://github.com/emmA-bkb"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg text-center transition flex items-center justify-center gap-2"
      >
        <img src={`${BASE_PATH}/github-icon.png?t=${Date.now()}`} alt="GitHub" className="w-5 h-5" />
        Visit my GitHub
      </a>
    </div>
  );
}
