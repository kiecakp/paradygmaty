-- -------- zadanie 3 ---------

rev :: [a] -> [a]
rev [] = []
rev (first:rest) = rev rest ++ [first]

main :: IO ()
main =  do
  let arr = [1, 2, 3, 4]
  print(rev arr)

-- -------- zadanie 4 ---------

fun :: [(Int, Int, Int)]
fun = [(x, y, x*y) | x <- [1..12], y <- [1..12] ]

main :: IO ()
main =  do
  print(fun)

-- -------- zadanie 5 ---------

colors :: [String] -> [(String, String)]
colors [] = []
colors (first:rest) = [(first, x) | x <- rest] ++ colors rest

main :: IO ()
main =  do
  let arr = ["black", "white", "blue", "yellow", "red"]
  print(colors arr)

-- -------- zadanie 6 ---------

append :: [a] -> [a] -> [a]
append x xs = x ++ xs

member :: Eq a => a -> [a] -> Bool
member x [] = False
member x (first:rest) = first == x || member x rest

lastEl :: [a] -> a
lastEl [] = error "Pusta tablica"
lastEl [x] = x
lastEl (first:rest) = lastEl rest

delete :: Eq a => a -> [a] -> [a]
delete x arr = [y | y <- arr, y /= x]

split :: Ord a => a -> [a] -> ([a], [a])
split x arr = ([y | y <- arr, y < x], [y | y <- arr, y > x])

main :: IO ()
main =  do
  let arr1 = [1, 2, 3, 4]
  let arr2 = [5, 6, 7, 8]
  print(append arr1 arr2)
  print(member 8 arr1)
  print(lastEl arr2)
  print(delete 2 arr1)
  print(split 3 arr1)

-- -------- zadanie 7 ---------

filtr :: (a -> Bool) -> [a] -> [a]
filtr p arr = [y | y <- arr, p y]

main :: IO ()
main =  do
  let arr = [1, 2, 3, 4, 5, 6, 7, 8]
  print(filtr (<5) arr)

-- -------- zadanie 8 ---------

onlyEven :: [Int] -> [Int]
onlyEven arr = [x | x <- arr, (x `mod` 2) == 0]

main :: IO ()
main =  do
  let arr = [1, -2, 3, 4, -5, 6, 7, 8]
  print(onlyEven arr)

-- -------- zadanie 9 ---------

doubleAll :: [Int] -> [Int]
doubleAll [] = []
doubleAll (first:rest) = [first] ++ [first] ++ doubleAll rest

main :: IO ()
main =  do
  let arr = [1, -2, 3, 4, -5, 6, 7, 8]
  print(doubleAll arr)

-- -------- zadanie 10 ---------

sumOfDigits :: Int -> Int
sumOfDigits 0 = 0
sumOfDigits a
  | a < 0 = sumOfDigits (abs a)
  | otherwise = a `mod` 10 + sumOfDigits (a `div` 10)

main :: IO ()
main =  do
  print(sumOfDigits 347)
