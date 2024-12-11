Score : $100$ points

## Problem Statement

There are three airports A, B and C, and flights between each pair of airports in both directions.

A one-way flight between airports A and B takes $P$ hours, a one-way flight between airports B and C takes $Q$ hours, and a one-way flight between airports C and A takes $R$ hours.

Consider a route where we start at one of the airports, fly to another airport and then fly to the other airport.

What is the minimum possible sum of the flight times?

## Constraints

- $1 \leq P,Q,R \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $P$ $Q$ $R$

## Output

Print the minimum possible sum of the flight times.

```input1
1 3 4
```

```output1
4
```

- The sum of the flight times in the route A $\rightarrow$ B $\rightarrow$ C: $1 + 3 = 4$ hours
- The sum of the flight times in the route A $\rightarrow$ C $\rightarrow$ C: $4 + 3 = 7$ hours
- The sum of the flight times in the route B $\rightarrow$ A $\rightarrow$ C: $1 + 4 = 5$ hours
- The sum of the flight times in the route B $\rightarrow$ C $\rightarrow$ A: $3 + 4 = 7$ hours
- The sum of the flight times in the route C $\rightarrow$ A $\rightarrow$ B: $4 + 1 = 5$ hours
- The sum of the flight times in the route C $\rightarrow$ B $\rightarrow$ A: $3 + 1 = 4$ hours

The minimum of these is $4$ hours.

```input2
3 2 3
```

```output2
5
```