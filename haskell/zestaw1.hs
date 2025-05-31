-- -------- zadanie 2 ---------

square :: Double -> Double
square a = a * a

cube :: Double -> Double
cube a = a * a * a

average :: Double -> Double -> Double
average a b = (a + b) / 2

main :: IO ()
main =  do
  print(square 5)
  print(cube 4)
  print(average 3 7)

-- -------- zadanie 3 ---------

-- wersja z if .. else
math1 :: Double -> Double -> Double -> String
math1 a b c =
  let delta = (b * b) - (4 * a * c)
  in if delta < 0 then
    "Brak pierwiastkow"
  else if delta == 0 then
    let x = -b / (2 * a)
    in "Jedno rozwiazanie: x = " ++ show x
  else
    let x1 = (-b + sqrt delta) / (2 * a)
        x2 = (-b - sqrt delta) / (2 * a)
    in "Dwa rozwiazania: x1 = " ++ show x1 ++ ", x2 = " ++ show x2

-- wersja z |
math2 :: Double -> Double -> Double -> String
math2 a b c
  | delta < 0 = "Brak pierwiastkow"
  | delta == 0 = "Jedno rozwiazanie: x = " ++ show x
  | otherwise = "Dwa rozwiazania: x1 = " ++ show x1 ++ ", x2 = " ++ show x2
  where 
    delta = (b * b) - (4 * a * c)
    x = -b / (2 * a)
    x1 = (-b + sqrt delta) / (2 * a)
    x2 = (-b - sqrt delta) / (2 * a)

main :: IO ()
main =  do
  print(math1 1 (-5) 6)
  print(math2 1 (-5) 6)

-- -------- zadanie 4 ---------

silnia :: Int -> Int
silnia 0 = 1
silnia a = a * silnia (a - 1)

main :: IO ()
main =  do
  print(silnia 3)

-- -------- zadanie 5 ---------

fib :: Int -> Int
fib 1 = 1
fib 2 = 2
fib a = fib (a - 1) + fib (a - 2)

main :: IO ()
main =  do
  print(fib 7)

-- -------- zadanie 6 ---------

minmax :: Int -> Int -> Int -> Int
minmax a b c = maximum[a, b, c] - minimum[a, b, c]

main :: IO ()
main =  do
  print(minmax 7 1 4)

-- -------- zadanie 7 ---------

sumOfSquares :: Int -> Int -> Int
sumOfSquares a b = (a * a) + (b * b)

main :: IO ()
main =  do
  print(sumOfSquares 3 4)

-- -------- zadanie 8 ---------

lastDigit :: Int -> Int
lastDigit a = abs a `mod` 10

main :: IO ()
main =  do
  print(lastDigit 42)
  print(lastDigit (-17))