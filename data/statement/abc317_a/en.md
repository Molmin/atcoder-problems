Score : $100$ points

## Problem Statement

Naohiro has a monster. The monster's current health is $H$.<br>
He also has $N$ kinds of potions, numbered from $1$ to $N$ in ascending order of effectiveness.<br>
If you give the monster potion $n$, its health will increase by $P_n$. Here, $P_1 \lt P_2 \lt \dots \lt P_N$.

He wants to increase the monster's health to $X$ or above by giving it one of the potions.<br>
Print the number of the least effective potion that can achieve the purpose. (The constraints guarantee that such a potion exists.)

## Constraints

- $2 \leq N \leq 100$
- $1 \leq H \lt X \leq 999$
- $1 \leq P_1 \lt P_2 \lt \dots \lt P_N = 999$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $H$ $X$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the number of the least effective potion that can achieve the purpose.

```input1
3 100 200
50 200 999
```

```output1
2
```

Below is the change in the monster's health when one of the potions is given to the monster.

- If potion $1$ is given, the monster's health becomes $100 + 50 = 150$.
- If potion $2$ is given, the monster's health becomes $100 + 200 = 300$.
- If potion $3$ is given, the monster's health becomes $100 + 999 = 1099$.

The potions that increase the monster's health to at least $X = 200$ are potions $2$ and $3$.
The answer is the least effective of them, which is potion $2$.

```input2
2 10 21
10 999
```

```output2
2
```

```input3
10 500 999
38 420 490 585 613 614 760 926 945 999
```

```output3
4
```