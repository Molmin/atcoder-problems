Score : $900$ points

## Problem Statement

Takahashi and Aoki will play the following game.

1. For each $i=1,2,\ldots,N$ in this order, do the following.1.    - Write each integer from $l_i$ through $r_i$ once on the blackboard. (Here, $l_i$ and $r_i$ are non-negative integers from the input.)
2. While one or more integers are written on the blackboard, the players take turns doing the following, with Takahashi going first.1.    - Choose and perform exactly one of the following two operations.1.    -   - Delete all even numbers written on the blackboard, and replace each remaining integer with half its value rounded down to an integer.
2.    -   - Delete all odd numbers written on the blackboard, and replace each remaining integer with half its value.
3. When no integer is written on the blackboard, the game ends and the last player to perform an operation wins.

It can be proved that the game ends in a finite number of operations if Takahashi and Aoki act optimally. Find the winner in this case.

Solve the above problem for $T$ cases.

## Constraints

- $1 \leq T \leq 10^4$
- $1 \leq N \leq 10^4$
- $0 \leq l_i \leq r_i \leq 10^{18}$
- $r_i \lt l_{i+1}$
- The sum of $N$ over the test cases in a single input is at most $10^4$.
- All input values are integers.

## Input

The input is given from Standard Input in the following format, where $\mathrm{test}_i$ represents the $i$-th test case:

> $T$
> 
> $\mathrm{test}_1$
> 
> $\vdots$
> 
> $\mathrm{test}_T$

Each test case is given in the following format:

> $N$
> 
> $l_1$ $r_1$
> 
> $\vdots$
> 
> $l_N$ $r_N$

## Output

Print $T$ lines. The $i$-th line should contain `Takahashi` if Takahashi wins in the $i$-th test case, and `Aoki` if Aoki wins.

```input1
3
2
1 2
5 7
1
0 100
10
1312150450968413 28316250877914571
74859962623690078 84324828731963974
148049062628894320 252509054433933439
269587449430302150 335408917861648766
349993004923078531 354979173822804781
522842184971407769 578223540024979436
585335723211047194 615812229161735895
645762258982631926 760713016476190622
779547116602436424 819875141880895723
822981260158260519 919845426262703496
```

```output1
Aoki
Aoki
Takahashi
```

Here is an example of how the game goes for the first test case. 

- Each of $1,2,5,6,7$ is written once on the blackboard.
- Takahashi chooses to delete the odd numbers. $1,5,7$ are deleted from the blackboard, and the remaining integers $2,6$ are replaced by half their values, that is, $1,3$, respectively.
- Aoki chooses to delete the odd numbers. $1,3$ are deleted from the blackboard, and no more integer is written on the blackboard, so the game ends and Aoki, who performed the last operation, wins.