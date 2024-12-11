Score : $300$ points

## Problem Statement

$2^N$ players, labeled $1$ through $2^N$, will compete against each other in a single-elimination programming tournament.<br>
The rating of Player $i$ is $A_i$. Any two players have different ratings, and a match between two players always results in the victory of the player with the higher rating.  

The tournament looks like a perfect binary tree.<br>
Formally, the tournament will proceed as follows:  

- For each integer $i = 1, 2, 3, \dots, N$ in this order, the following happens.-   - For each integer $j (1 \le j \le 2^{N - i})$, among the players who have never lost, the player with the $(2j - 1)$-th smallest label and the player with the $2j$-th smallest label play a match against each other.

Find the label of the player who will take **second place**, that is, lose in the final match.

## Constraints

- $1 \le N \le 16$
- $1 \le A_i \le 10^9$
- $A_i$ are pairwise different.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_{2^N}$

## Output

Print the label of the player who will take **second place**.

```input1
2
1 4 2 5
```

```output1
2
```

First, there will be two matches between Players $1$ and $2$ and between Players $3$ and $4$. According to the ratings, Players $2$ and $4$ will win.<br>
Then, there will be a match between Players $2$ and $4$, and the tournament will end with Player $4$ becoming champion.<br>
The player who will lose in the final match is Player $2$, so we should print $2$.  

```input2
2
3 1 5 4
```

```output2
1
```

First, there will be two matches between Players $1$ and $2$ and between Players $3$ and $4$. According to the ratings, Players $1$ and $3$ will win.<br>
Then, there will be a match between Players $1$ and $3$, and the tournament will end with Player $3$ becoming champion.<br>
The player who will lose in the final match is Player $1$, so we should print $1$.  

```input3
4
6 13 12 5 3 7 10 11 16 9 8 15 2 1 14 4
```

```output3
2
```