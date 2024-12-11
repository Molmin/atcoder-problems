Score : $900$ points

## Problem Statement

There is a tournament with $2^N$ participants, numbered $1$ to $2^N$.

The tournament proceeds as follows:

- <p>First, each participant is given a red or blue hat.
You are given the color of the hat for each participant as the string $S$.
Specifically, participant $i$ is given a red hat if the $i$-th character ($1 \leq i \leq 2^N$) of $S$ is `R`, and a blue hat if it is `B`.</p>
- <p>Then, the following operation is repeated until there is only one participant remaining:</p>
-   - Let $2k$ be the current number of participants. Divide the participants into $k$ pairs.
You can freely choose how to pair them.
Then, a match is held for each pair; the winner remains, and the loser leaves the tournament.
The participants are numbered in descending order of strength, so the participant with the **smaller** number always wins.

A match between two participants wearing red hats is called a **boring** match.
Your goal is to arrange the pairings so that no boring matches occur during the tournament.

Whether the goal is achievable or not depends on the string $S$.
Hence, you have decided to tamper with $S$ before the start of the tournament.
Specifically, you can perform the following operation zero or more times:

- Choose two adjacent characters in $S$ and swap them.

Determine whether it is possible to achieve the goal after operations.
If it is, find the minimum number of operations required.

## Constraints

- $1 \leq N \leq 18$
- $S$ is a string of length $2^N$ consisting of `R` and `B`.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

If it is impossible to achieve the goal, print $-1$.
Otherwise, print the minimum number of operations required.

```input1
2
RRBB
```

```output1
1
```

Without performing any operations, you cannot achieve the goal.

If you swap the second and third characters of $S$, making $S=$`RBRB`, you can achieve the goal as follows:

- Give red, blue, red, and blue hats to participants $1$, $2$, $3$, and $4$, respectively.
- Divide the four participants into two pairs $(1,4),(2,3)$.
No boring matches occur here.
After the matches, participants $1$ and $2$ remain.
- Divide the two participants into one pair $(1,2)$.
No boring matches occur here.
After the match, participant $1$ remains.

Therefore, the answer is $1$.

```input2
1
RR
```

```output2
-1
```

```input3
4
RBBRRBRBBRBBBRBR
```

```output3
0
```

```input4
5
RBRRBRRRBRRRRRRRRRBBBBBBBBBBBBBB
```

```output4
11
```