class Solution {
public:
    int minimumTeachings(int n, vector<vector<int>>& languages,
                         vector<vector<int>>& friendships) {
        int m = languages.size();
        vector<unordered_set<int>>st(m);
        unordered_map<int, int> mpp;
        for (int i = 0; i < m; i++) {
            for (auto it : languages[i]) {
                st[i].insert(it);
                mpp[it]++;
            }
        }
        vector<pair<int, int>> vp(mpp.begin(), mpp.end());
        sort(vp.begin(), vp.end(),
             [](const auto& a, const auto& b) { return a.second > b.second; });
        int ans = INT_MAX;
        for (auto& lang : vp) {
            unordered_set<int> temp;
            for (auto& it : friendships) {
                int u = it[0] - 1;
                int v = it[1] - 1;
                bool check = false;
                
                for (int uu : st[u]) {
                    if (st[v].count(uu)) {
                        check = true;
                        break;
                    }
                }

                if (!check) {
                    if (!st[u].count(lang.first)){
                        temp.insert(u);
                    }
                    if(!st[v].count(lang.first)){
                        temp.insert(v);
                    }
                }
            }
            ans=min(ans,(int)temp.size());
            if(ans==0)return 0;
        }
        return (ans==INT_MIN) ? 0: ans;
    }
};
