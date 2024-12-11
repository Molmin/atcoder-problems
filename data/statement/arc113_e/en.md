Score : $800$ points

## Problem Statement

Given is a string $S$ consisting of `a` and `b`. Find the lexicographically **greatest** string that can be obtained by applying the following operation to $S$ zero or more times:

- Choose two characters of $S$ that are the same letter. Reverse the string between them and delete the chosen two characters. In other words: let $s_i$ denote the $i$-th character of $S$. Choose $i &lt; j$ such that $s_i = s_j$ and replace $S$ with $s_1\dots s_{i-1}s_{j-1}\dots s_{i+1}s_{j+1}\dots s_{|S|}$.

In this problem, you are given $T$ test cases. The $i$-th test case is represented as $S_i$ and asks you to solve the problem above for $S = S_i$.

## Constraints

- $1 \leq T \leq 2\times 10^5$
- $1 \leq |S_i|\quad (i=1,\dots, T)$
- $1 \leq |S_1| + \dots + |S_T| \leq 2\times 10^5$
- $S_i$ consists of `a` and `b`.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_T$

## Output

Print $T$ lines. The $i$-th line should contain the lexicographically greatest string that can be obtained by applying the operation to $S_i$ zero or more times.

```input1
20
abbaa
babbb
aabbabaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbabaaaaabbaababaaabbabbbbbaaaaa
babbbaaaabaababbbabaabaaaaababaa
bbaababababbbaaabaabababaabbabab
abaabbabaabaaaaabaaaabbaabaaaaab
aabababbabbabbabbaaaabbabbbabaab
aabababbabbbbaaaabbaaaaabbaaaabb
abbbbaabaaabababaaaababababbaabb
aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbb
aaaaaaaaaabbbbbbbbbbbbbbbbbbbbbb
abababaaababaaabbbbbaaaaaaabbbbb
aabbaaaaababaabbbbbbbbbaabaaabbb
babababbababbbababbbbbababbbabbb
bbbbababbababbbabababbabbabbbbbb
aaaaaaaaaaaaaaaaababababbbabbbbb
aabababbabbabababababababbbbabbb
```

```output1
bba
bba
bbba
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbaaaaaaaa
bbbbbbbbbbbbbaaaaaaa
bbbbbbbbbbbbbbbb
bbbbbbbbbb
bbbbbbbbbbbbbbbbab
bbbbbbbbbbbbbb
bbbbbbbbbbbbbabb
abbbbbbbbb
bbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbaaaaaaaaa
bbbbbbbbbbbbbbbaaaaa
bbbbbbbbbbbbbbbbbbbbbb
bbbbbbbbbbbbbbbbbbbbba
bbbbbbbbbaaaaaaaaaaaaaaa
bbbbbbbbbbbbbbbbba
```

- In the $1$-st test case, we can do the operation for the $1$-st and $4$-th characters to make $S$ `bba`.
- In the $2$-nd test case, we can do the operation for the $1$-st and $5$-th characters to make $S$ `bba`.
- In the $3$-rd test case, we can do the operation for the $1$-st and $2$-nd characters to make $S$ `bbabaa`, then do it for the $3$-rd and $5$-th characters to make $S$ `bbba`.