Score: $600$ points

## Problem Statement

This year's AtCoder mayoral election has two candidates, A and B, and $N$ voters have cast their votes. The voters are assigned numbers from $1$ to $N$, and voter $i$ $(1 \leq i \leq N)$ voted for candidate $c_i$.

Now, the votes will be counted. As each vote is counted, the provisional result will be announced as one of the following three outcomes:

- **Result A:** Currently, candidate A has more votes.
- **Result B:** Currently, candidate B has more votes.
- **Result C:** Currently, candidates A and B have the same number of votes.

There is a rule regarding the order of vote counting: votes from all voters except voter $1$ must be counted in ascending order of their voter numbers. (The vote from voter $1$ may be counted at any time.)

How many different sequences of provisional results could be announced?

What is a sequence of provisional results?Let $s_i$ be the result (`A`, `B`, or `C`) reported when the $i$-th vote $(1 \leq i \leq N)$ is counted. The sequence of provisional results refers to the string $s_1 s_2 \dots s_N$.

<br>

## Constraints

- $N$ is an integer such that $2 \leq N \leq 1000000$.
- Each of $c_1, c_2, \dots, c_N$ is `A` or `B`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $c_1 c_2 \cdots c_N$

## Output

Print the answer.

```input1
4
AABB
```

```output1
3
```

In this sample input, there are four possible orders in which the votes may be counted:

- The votes are counted in the order of voter $1 \to 2 \to 3 \to 4$.
- The votes are counted in the order of voter $2 \to 1 \to 3 \to 4$.
- The votes are counted in the order of voter $2 \to 3 \to 1 \to 4$.
- The votes are counted in the order of voter $2 \to 3 \to 4 \to 1$.

The sequences of preliminary results for these will be `AAAC`, `AAAC`, `ACAC`, `ACBC` from top to bottom, so there are three possible sequences of preliminary results.

```input2
4
AAAA
```

```output2
1
```

No matter the order of counting, the sequence of preliminary results will be `AAAA`.

```input3
10
BBBAAABBAA
```

```output3
5
```

```input4
172
AABAAAAAABBABAABBBBAABBAAABBABBABABABBAAABAAABAABAABBBBABBBABBABBBBBBBBAAABAAABAAABABBBAABAAAABABBABBABBBBBABAABAABBBABABBAAAABAABABBBABAAAABBBBABBBABBBABAABBBAAAABAAABAAAB
```

```output4
24
```