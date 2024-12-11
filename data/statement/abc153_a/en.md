Score : $100$ points

## Problem Statement

Serval is fighting with a monster.

The *health* of the monster is $H$.

In one attack, Serval can decrease the monster's health by $A$.
There is no other way to decrease the monster's health.

Serval wins when the monster's health becomes $0$ or below.

Find the number of attacks Serval needs to make before winning.

## Constraints

- $1 \leq H \leq 10^4$
- $1 \leq A \leq 10^4$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $A$

## Output

Print the number of attacks Serval needs to make before winning.

```input1
10 4
```

```output1
3
```

- After one attack, the monster's health will be $6$.
- After two attacks, the monster's health will be $2$.
- After three attacks, the monster's health will be $-2$.

Thus, Serval needs to make three attacks to win.

```input2
1 10000
```

```output2
1
```

```input3
10000 1
```

```output3
10000
```