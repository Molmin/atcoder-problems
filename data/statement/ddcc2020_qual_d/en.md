Score: $500$ points

## Problem Statement

$N$ programmers are going to participate in the preliminary stage of DDCC 20XX. Due to the size of the venue, however, at most $9$ contestants can participate in the finals.

The preliminary stage consists of several rounds, which will take place as follows:

- All the $N$ contestants will participate in the first round.
- When $X$ contestants participate in some round, the number of contestants advancing to the next round will be decided as follows:-   - The organizer will choose two consecutive digits in the decimal notation of $X$, and replace them with the sum of these digits. The number resulted will be the number of contestants advancing to the next round.&lt;br&gt;
For example, when $X = 2378$, the number of contestants advancing to the next round will be $578$ (if $2$ and $3$ are chosen), $2108$ (if $3$ and $7$ are chosen), or $2315$ (if $7$ and $8$ are chosen).&lt;br&gt;
When $X = 100$, the number of contestants advancing to the next round will be $10$, no matter which two digits are chosen.
- The preliminary stage ends when $9$ or fewer contestants remain.

Ringo, the chief organizer, wants to hold as many rounds as possible.
Find the maximum possible number of rounds in the preliminary stage.

Since the number of contestants, $N$, can be enormous, it is given to you as two integer sequences $d_1, \ldots, d_M$ and $c_1, \ldots, c_M$, which means the following: the decimal notation of $N$ consists of $c_1 + c_2 + \ldots + c_M$ digits, whose first $c_1$ digits are all $d_1$, the following $c_2$ digits are all $d_2$, $\ldots$, and the last $c_M$ digits are all $d_M$.

## Constraints

- $1 \leq M \leq 200000$
- $0 \leq d_i \leq 9$
- $d_1 \neq 0$
- $d_i \neq d_{i+1}$
- $c_i \geq 1$
- $2 \leq c_1 + \ldots + c_M \leq 10^{15}$

## Input

Input is given from Standard Input in the following format:

> $M$
> 
> $d_1$ $c_1$
> 
> $d_2$ $c_2$
> 
> $:$
> 
> $d_M$ $c_M$

## Output

Print the maximum possible number of rounds in the preliminary stage.

```input1
2
2 2
9 1
```

```output1
3
```

In this case, $N = 229$ contestants will participate in the first round. One possible progression of the preliminary stage is as follows:

- $229$ contestants participate in Round $1$, $49$ contestants participate in Round $2$, $13$ contestants participate in Round $3$, and $4$ contestants advance to the finals.

Here, three rounds take place in the preliminary stage, which is the maximum possible number.  

```input2
3
1 1
0 8
7 1
```

```output2
9
```

In this case, $1000000007$ will participate in the first round.