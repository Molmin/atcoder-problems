Score : $600$ points

## Problem Statement

$10^9$ contestants, numbered $1$ to $10^9$, will compete in a competition.
There will be two contests in this competition.

The organizer prepared $N$ problems, numbered $1$ to $N$, to use in these contests.
When Problem $i$ is presented in a contest, it will be solved by all contestants from Contestant $L_i$ to Contestant $R_i$ (inclusive), and will not be solved by any other contestants.

The organizer will use these $N$ problems in the two contests.
Each problem must be used in exactly one of the contests, and each contest must have at least one problem.

The *joyfulness* of each contest is the number of contestants who will solve all the problems in the contest.
Find the maximum possible total joyfulness of the two contests.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq L_i \leq R_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

Print the maximum possible total joyfulness of the two contests.

```input1
4
4 7
1 4
5 8
2 5
```

```output1
6
```

The optimal choice is:

- Use Problem $1$ and $3$ in the first contest. Contestant $5$, $6$, and $7$ will solve both of them, so the joyfulness of this contest is $3$.
- Use Problem $2$ and $4$ in the second contest. Contestant $2$, $3$, and $4$ will solve both of them, so the joyfulness of this contest is $3$.
- The total joyfulness of these two contests is $6$. We cannot make the total joyfulness greater than $6$.

```input2
4
1 20
2 19
3 18
4 17
```

```output2
34
```

```input3
10
457835016 996058008
456475528 529149798
455108441 512701454
455817105 523506955
457368248 814532746
455073228 459494089
456651538 774276744
457667152 974637457
457293701 800549465
456580262 636471526
```

```output3
540049931
```