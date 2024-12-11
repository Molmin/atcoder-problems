Score : $200$ points

## Problem Statement

Takahashi is competing in a sumo tournament.
The tournament lasts for $15$ days, during which he performs in one match per day.
If he wins $8$ or more matches, he can also participate in the next tournament.

The matches for the first $k$ days have finished.
You are given the results of Takahashi's matches as a string $S$ consisting of `o` and `x`.
If the $i$-th character in $S$ is `o`, it means that Takahashi won the match on the $i$-th day; if that character is `x`, it means that Takahashi lost the match on the $i$-th day.

Print `YES` if there is a possibility that Takahashi can participate in the next tournament, and print `NO` if there is no such possibility.

## Constraints

- $1 \leq k \leq 15$
- $S$ is a string of length $k$ consisting of `o` and `x`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print `YES` if there is a possibility that Takahashi can participate in the next tournament, and print `NO` otherwise.

```input1
oxoxoxoxoxoxox
```

```output1
YES
```

Takahashi has $7$ wins and $7$ losses before the last match. If he wins that match, he will have $8$ wins.

```input2
xxxxxxxx
```

```output2
NO
```