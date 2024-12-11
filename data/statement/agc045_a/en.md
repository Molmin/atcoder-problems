Score : $400$ points

## Problem Statement

There are two persons, numbered $0$ and $1$, and a variable $x$ whose initial value is $0$.
The two persons now play a game.
The game is played in $N$ rounds. The following should be done in the $i$-th round ($1 \leq i \leq N$):

- Person $S_i$ does one of the following:-   - Replace $x$ with $x \oplus A_i$, where $\oplus$ represents bitwise XOR.
-   - Do nothing.

Person $0$ aims to have $x=0$ at the end of the game, while Person $1$ aims to have $x \neq 0$ at the end of the game.

Determine whether $x$ becomes $0$ at the end of the game when the two persons play optimally.

Solve $T$ test cases for each input file.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq N \leq 200$
- $1 \leq A_i \leq 10^{18}$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- All numbers in input are integers.

## Input

Input is given from Standard Input in the following format.
The first line is as follows:

> $T$

Then, $T$ test cases follow.
Each test case is given in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $S$

## Output

For each test case, print a line containing `0` if $x$ becomes $0$ at the end of the game, and `1` otherwise.

```input1
3
2
1 2
10
2
1 1
10
6
2 3 4 5 6 7
111000
```

```output1
1
0
0
```

In the first test case, if Person $1$ replaces $x$ with $0 \oplus 1=1$, we surely have $x \neq 0$ at the end of the game, regardless of the choice of Person $0$.

In the second test case, regardless of the choice of Person $1$, Person $0$ can make $x=0$ with a suitable choice.