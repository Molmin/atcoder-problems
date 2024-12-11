Score : $100$ points

## Problem Statement

The magnitude of an earthquake is a logarithmic scale of the energy released by the earthquake. It is known that each time the magnitude increases by $1$, the amount of energy gets multiplied by approximately $32$.<br>
Here, we assume that the amount of energy gets multiplied by exactly $32$ each time the magnitude increases by $1$. In this case, how many times is the amount of energy of a magnitude $A$ earthquake as much as that of a magnitude $B$ earthquake?

## Constraints

- $3\leq B\leq A\leq 9$
- $A$ and $B$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer as an integer.

```input1
6 4
```

```output1
1024
```

$6$ is $2$ greater than $4$, so a magnitude $6$ earthquake has $32\times 32=1024$ times as much energy as a magnitude $4$ earthquake has.

```input2
5 5
```

```output2
1
```

Earthquakes with the same magnitude have the same amount of energy.