Score : $900$ points

## Problem Statement

Snuke is playing a game using $n$ kinds of cards called Card $1$ through Card $n$.
There are $m$ kinds of card packs available in this game; the $i$-th pack contains $s_{i,j}$ copies of Card $j$.
Every pack contains at least one card.

Initially, Snuke has $c_j$ copies of Card $j$ (it is guaranteed that he has at least one card in total).

He can do the following operations any number of times in any order:

- Get a card pack: Choose $i=1$, $\dots$, or $m$ and get all cards contained in the $i$-th pack.
- Exchange cards: Choose $j=1$, $\dots$, or $n$, discard $2j$ copies of Card $j$, and get one copy of Card $((j \text{ mod } n) + 1)$. (He must have at least $2j$ copies of Card $j$.)

Snuke wants to have as few cards as possible in total. Find the minimum number of cards that Snuke can end up with.

## Constraints

- $2 \le n \le 16$
- $1 \le m \le 50$
- $0 \le s_{i,j}, c_j \lt 2j$
- $c_1+\dots +c_n &gt; 0$
- $s_{i,1}+\dots +s_{i,n} &gt; 0$

## Input

Input is given from Standard Input in the following format:

> $n$ $m$
> 
> $c_1$ $\dots$ $c_n$
> 
> $s_{1,1}$ $\dots$ $s_{1,n}$
> 
> $\vdots$
> 
> $s_{m,1}$ $\dots$ $s_{m,n}$

## Output

Print the minimum number of cards that Snuke can end up with.

```input1
3 1
0 3 5
0 1 0
```

```output1
1
```

Let $(a_1, a_2, a_3)$ denote the fact that Snuke has $a_1$ copies of Card $1$, $a_2$ copies of Card $2$, and $a_3$ copies of Card $3$.
The following sequence of operations leaves Snuke with one card:

- get the $1$-st card pack, which results in $(0,4,5)$;
- exchange cards with $j=2$, which results in $(0,0,6)$;
- exchange cards with $j=3$, which results in $(1,0,0)$.

It is impossible to end up with zero cards, so this is the minimum possible number.

```input2
5 2
0 0 1 7 0
0 3 2 0 0
1 0 4 0 0
```

```output2
2
```

By getting two packs of the second kind and one pack of the first kind, and then exchanging cards some number of times, Snuke can end up with one copy of Card $4$ and one copy of Card $5$.

```input3
12 10
0 2 4 4 1 5 6 8 0 9 18 19
1 2 4 3 4 0 6 10 9 18 5 7
0 3 0 1 1 4 11 13 9 19 9 10
1 2 4 1 5 8 1 6 15 0 11 1
0 2 0 6 9 3 13 14 16 9 14 14
1 3 2 5 6 1 9 7 1 7 6 22
0 0 4 5 2 3 8 3 13 14 17 4
0 3 3 4 0 7 0 9 14 2 17 14
0 2 4 1 3 3 3 14 17 6 15 13
0 0 1 0 1 0 4 5 9 4 17 17
1 2 1 3 5 7 0 13 7 6 1 0
```

```output3
9
```