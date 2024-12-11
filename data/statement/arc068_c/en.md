Score : $700$ points

## Problem Statement

Snuke has decided to play a game, where the player runs a railway company.
There are $M+1$ stations on Snuke Line, numbered $0$ through $M$.
A train on Snuke Line stops at station $0$ and every $d$-th station thereafter, where $d$ is a predetermined constant for each train.
For example, if $d = 3$, the train stops at station $0$, $3$, $6$, $9$, and so forth.

There are $N$ kinds of souvenirs sold in areas around Snuke Line. The $i$-th kind of souvenirs can be purchased when the train stops at one of the following stations: stations $l_i$, $l_i+1$, $l_i+2$, $...$, $r_i$.

There are $M$ values of $d$, the interval between two stops, for trains on Snuke Line: $1$, $2$, $3$, $...$, $M$.
For each of these $M$ values, find the number of the kinds of souvenirs that can be purchased if one takes a train with that value of $d$ at station $0$.
Here, assume that it is not allowed to change trains.

## Constraints

- $1 \leq N \leq 3 \times 10^{5}$
- $1 \leq M \leq 10^{5}$
- $1 \leq l_i \leq r_i \leq M$

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $l_1$ $r_1$
> 
> $:$
> 
> $l_{N}$ $r_{N}$

## Output

Print the answer in $M$ lines. The $i$-th line should contain the maximum number of the kinds of souvenirs that can be purchased if one takes a train stopping every $i$-th station.

```input1
3 3
1 2
2 3
3 3
```

```output1
3
2
2
```

- If one takes a train stopping every station, three kinds of souvenirs can be purchased: kind $1$, $2$ and $3$.
- If one takes a train stopping every second station, two kinds of souvenirs can be purchased: kind $1$ and $2$.
- If one takes a train stopping every third station, two kinds of souvenirs can be purchased: kind $2$ and $3$.

```input2
7 9
1 7
5 9
5 7
5 9
1 1
6 8
3 4
```

```output2
7
6
6
5
4
5
5
3
2
```