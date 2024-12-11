Score : $200$ points

## Problem Statement

Takahashi and Aoki will have a battle using their monsters.

The health and strength of Takahashi's monster are $A$ and $B$, respectively, and those of Aoki's monster are $C$ and $D$, respectively.

The two monsters will take turns attacking, in the order Takahashi's, Aoki's, Takahashi's, Aoki's, ...
Here, an attack decreases the opponent's health by the value equal to the attacker's strength.
The monsters keep attacking until the health of one monster becomes $0$ or below. The person with the monster whose health becomes $0$ or below loses, and the other person wins.

If Takahashi will win, print `Yes`; if he will lose, print `No`.

## Constraints

- $1 \leq A,B,C,D \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

If Takahashi will win, print `Yes`; if he will lose, print `No`.

```input1
10 9 10 10
```

```output1
No
```

First, Takahashi's monster attacks Aoki's monster, whose health is now $10-9=1$.

Next, Aoki's monster attacks Takahashi's monster, whose health is now $10-10=0$.

Takahashi's monster is the first to have $0$ or less health, so Takahashi loses.

```input2
46 4 40 5
```

```output2
Yes
```