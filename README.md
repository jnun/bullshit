# Bullshit isn't always bullshit

All I did was:

1. Create a few files
2. Use git add *
3. Create a public repo (free version)
4. Commit with messages (cause I'm fly like that)
5. Use git push to push to main on GitHub

## Nope, it didn't stop me — ya'll just wrong!

# API exposure is easy!

## API keys in code happen, really it does happen

Developers working solo can accidentally expose private keys, like API keys or other sensitive credentials, by committing them to publicly viewable personal repositories on GitHub due to a combination of oversight, lack of safeguards, and misunderstanding of GitHub’s visibility settings. Here’s a detailed breakdown of how this happens and why it’s a problem:

### 1. **Embedding Keys in Code**
   - **What Happens**: Developers often hardcode private keys (e.g., an OpenAI API key like `sk-proj-xyz`) directly into their source code for convenience during development. For example, they might include it in a configuration file (`config.py`) or directly in a script (`app.js`) to authenticate API requests.
   - **Why It’s Risky**: If this code is pushed to a public repository, anyone with internet access can view the key. Unlike passwords, API keys are often long-lived and don’t require additional authentication, making them immediately usable by malicious actors.

### 2. **Misconfigured Repository Visibility**
   - **What Happens**: A solo developer creates a personal repository on GitHub and leaves it public, either intentionally (to share their work) or accidentally (not realizing the default setting or misunderstanding GitHub’s visibility options). They commit their code, including files with private keys, without realizing the repository is accessible to everyone.
   - **Why It’s Risky**: Public repositories are indexed by search engines and scanned by automated bots that specifically look for exposed credentials. Tools like GitHub’s own code search or third-party scanners (e.g., Gitrob, TruffleHog) can quickly find keys in public repos.

### 3. **Committing Sensitive Files Without Filtering**
   - **What Happens**: Developers might commit configuration files (e.g., `.env`, `secrets.json`) or entire project directories without properly excluding sensitive files. For instance, they might forget to add `.env` to their `.gitignore` file, so their environment variables—including API keys—are included in the commit.
   - **Why It’s Risky**: Even a single commit with a sensitive file can expose the key. Git stores commit history, so unless the developer rewrites history (e.g., using `git filter-branch` or `git rebase`), the key remains accessible in the repository’s history, even if it’s later removed.

### 4. **Lack of Automated Checks**
   - **What Happens**: Solo developers often don’t set up tools or workflows to scan for secrets before committing. Unlike teams that might use CI/CD pipelines with secret-scanning tools (e.g., GitGuardian, Dependabot), an individual might rely solely on manual checks and miss a key in their code.
   - **Why It’s Risky**: Without automated guardrails, it’s easy to overlook a key, especially in a large codebase or during rapid development. A single `git push` to a public repo can expose the key instantly.

### 5. **Not Understanding Git’s Persistent History**
   - **What Happens**: A developer might realize they’ve committed a key and delete it in a subsequent commit, thinking it’s now safe. However, they don’t realize that Git retains the full history of all commits, so the key is still accessible by viewing earlier commits or the repository’s history.
   - **Why It’s Risky**: Anyone who clones the repository or browses the commit history on GitHub can retrieve the key unless the developer takes explicit steps to remove it from history (e.g., using `git filter-repo` or GitHub’s “Remove Sensitive Data” feature) and force-pushes the rewritten history.

### 6. **Consequences of Exposure**
   - **Immediate Exploitation**: Bots and attackers constantly scan public repositories for keys. An exposed API key can be used to rack up unauthorized API usage (e.g., running costly AI model queries with an OpenAI key), access private data, or even compromise connected systems.
   - **Financial Loss**: Many API keys are tied to billing accounts. For example, an OpenAI key linked to a credit card could lead to unexpected charges if abused.
   - **Security Breaches**: If the key grants access to sensitive systems or data, exposure could lead to broader security issues, like unauthorized access to a developer’s cloud infrastructure.
   - **Reputational Damage**: For a solo developer showcasing their portfolio, an exposed key signals carelessness, which could harm their credibility with potential clients or employers.

### Real-World Example
Imagine a developer building a personal project that uses the OpenAI API. They store their key in a file called `config.py`:
```python
OPENAI_API_KEY = "sk-proj-7kL9pX8mQw3vR2tY6uJ1nZ5aB4cD8eF9gH2iK3mN6oP7qR9sT4uV5wX8yZ1"
```
They create a public GitHub repository to share their project, commit all files, and push to GitHub without adding `config.py` to `.gitignore`. The repository is now public, and within hours, a bot scanning GitHub detects the key. The attacker uses it to make thousands of API calls, racking up a massive bill on the developer’s OpenAI account. Even if the developer deletes `config.py` later, the key remains in the commit history unless they take specific steps to purge it.

### How Solo Developers Can Prevent This
To avoid accidentally exposing private keys, solo developers can adopt these best practices:
   - **Use Environment Variables**: Store keys in `.env` files and load them using libraries like `python-dotenv` or equivalent. Add `.env` to `.gitignore` to prevent commits.
   - **Check Repository Visibility**: Double-check that personal repositories are private unless they’re intentionally public. Use GitHub’s visibility settings wisely.
   - **Leverage .gitignore**: Create a robust `.gitignore` file that excludes sensitive files (e.g., `.env`, `secrets.json`, `*.key`).
   - **Enable Secret Scanning**: GitHub offers free secret scanning for public repositories, which can alert developers to exposed keys. For private repos, consider third-party tools like TruffleHog.
   - **Review Commits Locally**: Before pushing, use `git diff` or `git log` to inspect changes and ensure no sensitive data is included.
   - **Rotate Keys Immediately**: If a key is exposed, rotate it immediately through the provider’s dashboard (e.g., OpenAI’s API key management) and invalidate the old key.
   - **Learn Git History Rewriting**: If a key is committed, use tools like `git filter-repo` to remove it from history, then force-push the cleaned repository.
   - **Use Temporary Credentials**: For testing, use temporary or sandbox keys when possible, which limit damage if exposed.

### Why Solo Devs Are Particularly Vulnerable
Solo developers often lack the peer reviews, automated pipelines, or security expertise that teams have. They might be focused on building a project quickly, juggling multiple roles (coder, tester, deployer), and overlook security best practices. Public repositories are also tempting for showcasing work or sharing with others, increasing the likelihood of accidental exposure.

If you’re looking for specific tools or workflows to prevent this, or want a deeper dive into any part (e.g., how bots find keys or how to clean up an exposed key), let me know!

# This app installation instructions

'''
bullshit-app/
├── node_modules/        (auto-generated after npm install)
├── package.json         (project metadata and dependencies)
├── server.js            (main app file)
└── public/              (static files directory)
    └── index.html       (the webpage)
'''


'''
mkdir bullshit-app
cd bullshit-app
npm init -y
'''

This creates a basic package.json file with default settings.

'''
npm install express
'''
