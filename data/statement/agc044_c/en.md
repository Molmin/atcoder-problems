Score : $1000$ points

## Problem Statement

There are $3^N$ people dancing in circle.
We denote with $0,1,\dots, 3^{N}-1$ the positions in the circle, starting from an arbitrary position and going around clockwise. Initially each position in the circle is occupied by one person.

The people are going to dance on two kinds of songs: salsa and rumba.

- When a salsa is played, the person in position $i$ goes to position $j$, where $j$ is the number obtained replacing all digits $1$ with $2$ and all digits $2$ with $1$ when reading $i$ in base $3$ (e.g., the person in position $46$ goes to position $65$).
- When a rumba is played, the person in position $i$ moves to position $i+1$ (with the identification $3^N = 0$).

You are given a string $T=T_1T_2\cdots T_{|T|}$ such that $T_i=$`S` if the $i$-th song is a salsa and $T_i=$`R` if it is a rumba.
After all the songs have been played, the person that initially was in position $i$ is in position $P_i$.
Compute the array $P_0,P_1,\dots, P_{3^N-1}$.

## Constraints

- $1 \le N \le 12$
- $1 \le |T| \le 200,000$
- $T$ contains only the characters `S` and `R`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $T$

## Output

You should print on Standard Output:

> $P_0$ $P_1$ $\cdots$ $P_{3^N-1}$

```input1
1
SRS
```

```output1
2 0 1
```

Before any song is played, the positions are: $0$, $1$, $2$.

When we say "person $i$", we mean "the person that was initially in position $i$".

1. After the first salsa, the positions are: $0$, $2$, $1$.
2. After the rumba, the positions are: $1$, $0$, $2$ (so, person $0$ is in position $1$, person $1$ is in position $0$ and person $2$ is in position $2$).
3. After the second salsa, the positions are $2$, $0$, $1$ (so, person $0$ is in position $2$, person $1$ is in position $0$ and person $2$ is in position $1$).

```input2
2
RRSRSSSSR
```

```output2
3 8 1 0 5 7 6 2 4
```

```input3
3
SRSRRSRRRSRRRR
```

```output3
23 9 22 8 3 7 20 24 19 5 18 4 17 12 16 2 6 1 14 0 13 26 21 25 11 15 10
```