Score : $600$ points

## Problem Statement

You have $B-A+1$ cards: for each integer from $A$ through $B$, you have one card with that integer written on it.
You will give some of them (possibly none) to your pet, Snuke.

Snuke will be happy if, for every pair of different cards, the numbers written on them are pairwise coprime; otherwise, he will be sad.

How many sets of cards will make Snuke happy?

## Constraints

- $1 \leq A \leq B \leq 10^{18}$
- $B-A \leq 72$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the number of sets of cards that will make Snuke happy. **The constraints guarantee that the answer is less than $2^{63}$.**

```input1
2 4
```

```output1
6
```

You have three cards with $2$, $3$, and $4$ written on them. The following six sets of cards will make Snuke happy:

- $\{\}$
- $\{2\}$
- $\{3\}$
- $\{4\}$
- $\{2,3\}$
- $\{3,4\}$

```input2
1 1
```

```output2
2
```

The following two sets of cards will make Snuke happy:

- $\{\}$
- $\{1\}$

```input3
123456789000 123456789050
```

```output3
2125824
```